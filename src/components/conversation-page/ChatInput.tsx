'use client';

import type React from 'react';
import { BsFillSendFill, BsEmojiSmile } from 'react-icons/bs';
import { useState, useRef, useEffect } from 'react';
import { MdAttachFile } from 'react-icons/md';
import { FaImages, FaRegFileAlt, FaRegFileAudio } from 'react-icons/fa';
import { AnimatePresence, motion } from 'motion/react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
// import { useWidgetConfigStore } from '../../lib/store';

type ChatInputProps = {
	onSendMessage: (message: string, attachments?: File[]) => void;
	isLoading: boolean;
};

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
	const [message, setMessage] = useState('');
	const [openAttachment, setOpenAttachment] = useState(false);
	const [openEmoji, setOpenEmoji] = useState(false);
	// const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [selectedImages, setSelectedImages] = useState<File[]>([]);
	const [selectedDocuments, setSelectedDocuments] = useState<File[]>([]);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	// const fileInputRef = useRef<HTMLInputElement>(null);
	const imageInputRef = useRef<HTMLInputElement>(null);
	const documentInputRef = useRef<HTMLInputElement>(null);
	// const [uploadProgress, setUploadProgress] = useState<number>(0);
	// const { primaryColor } = useWidgetConfigStore();

	const toggleAttachment = () => {
		setOpenAttachment(!openAttachment);
		setOpenEmoji(false);
	};

	const toggleEmoji = () => {
		setOpenEmoji(!openEmoji);
		setOpenAttachment(false);
	};

	const handleEmojiSelect = (emoji: any) => {
		setMessage((prev) => prev + emoji.native);
		setOpenEmoji(false);
	};

	const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || []);
		const imageFiles = files.filter((file) => file.type.startsWith('image/'));
		setSelectedImages((prev) => [...prev, ...imageFiles]);
		setOpenAttachment(false);
	};

	const handleDocumentSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || []);
		const documentFiles = files.filter(
			(file) =>
				file.type === 'application/pdf' ||
				file.type === 'application/msword' ||
				file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
				file.type === 'text/plain' ||
				file.type === 'audio/mpeg' ||
				file.type === 'audio/wav'
		);
		setSelectedDocuments((prev) => [...prev, ...documentFiles]);
		setOpenAttachment(false);
	};

	const removeImage = (index: number) => {
		setSelectedImages((prev) => prev.filter((_, i) => i !== index));
	};

	const removeDocument = (index: number) => {
		setSelectedDocuments((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if ((message.trim() || selectedImages.length > 0 || selectedDocuments.length > 0) && !isLoading) {
			onSendMessage(message, [...selectedImages, ...selectedDocuments]);
			setMessage('');
			setSelectedImages([]);
			setSelectedDocuments([]);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			if ((message.trim() || selectedImages.length > 0 || selectedDocuments.length > 0) && !isLoading) {
				onSendMessage(message, [...selectedImages, ...selectedDocuments]);
				setMessage('');
				setSelectedImages([]);
				setSelectedDocuments([]);
			}
		}
	};

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
		}
	}, [message]);

	return (
		<form onSubmit={handleSubmit} className="pt-1 px-2 backdrop-blur-md bg-white/10 w-full">
			<div className="border border-slate-100 shadow relative flex items-center bg-white w-full">
				<button onClick={toggleEmoji} type="button" className="flex items-center justify-center hover:text-slate-700 text-slate-400">
					<BsEmojiSmile className="text-xl ml-1.5" />
				</button>
				<textarea
					ref={textareaRef}
					onKeyDown={handleKeyDown}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type your message..."
					rows={1}
					className="w-full pr-16 bg-transparent resize-none overflow-y-auto hide-scrollbar max-h-[100px] px-2 py-2.5 text-sm text-black focus:outline-none"
					disabled={isLoading}
				/>

				<div className="absolute right-2 inset-y-0 h-full flex items-center gap-1">
					<button onClick={toggleAttachment} type="button" className="flex items-center justify-center hover:text-slate-700 text-slate-400">
						<MdAttachFile className="text-2xl" />
					</button>

					<button
						type="submit"
						disabled={isLoading || (!message.trim() && selectedImages.length === 0 && selectedDocuments.length === 0)}
						className="flex items-center justify-center text-slate-700 hover:text-black disabled:text-slate-300"
					>
						<BsFillSendFill className="text-xl" />
					</button>
				</div>

				{/* File Preview Section */}
				{(selectedImages.length > 0 || selectedDocuments.length > 0) && (
					<div className="absolute h-[100px] top-[-100px] bottom-full left-0 w-full p-2 bg-white border border-slate-100 rounded-t">
						<div className="flex flex-wrap gap-2">
							{selectedImages.map((file, index) => (
								<div key={index} className="relative group">
									<img src={URL.createObjectURL(file)} alt={file.name} className="w-16 h-16 object-cover rounded" />
									<button
										type="button"
										onClick={() => removeImage(index)}
										className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
									>
										×
									</button>
								</div>
							))}
							{selectedDocuments.map((file, index) => (
								<div key={index} className="relative group">
									<div className="w-16 h-16 flex items-center justify-center bg-slate-100 rounded">
										<FaRegFileAlt className="text-2xl text-slate-400" />
									</div>
									<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[8px] p-1 truncate">{file.name}</div>
									<button
										type="button"
										onClick={() => removeDocument(index)}
										className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
									>
										×
									</button>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Attachment Section */}
				<AnimatePresence>
					{openAttachment && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ duration: 0.4 }}
							className="flex bg-slate-200 h-[100px] items-center gap-5 absolute top-[-100px] left-0 w-full p-3 border border-slate-100 rounded"
						>
							<input type="file" ref={imageInputRef} onChange={handleImageSelect} accept="image/*" multiple className="hidden" />
							<button type="button" onClick={() => imageInputRef.current?.click()} className="flex flex-col items-center gap-1">
								<div className="flex h-11 w-11 items-center justify-center border bg-white border-slate-200 shadow-xl rounded hover:text-slate-700 text-slate-400">
									<FaImages className="text-xl" />
								</div>
								<span className="text-[11px] font-medium text-slate-600">Images</span>
							</button>

							<input
								type="file"
								ref={documentInputRef}
								onChange={handleDocumentSelect}
								accept=".pdf,.doc,.docx,.txt,.mp3,.wav"
								multiple
								className="hidden"
							/>
							<button type="button" onClick={() => documentInputRef.current?.click()} className="flex flex-col items-center gap-1">
								<div className="flex h-11 w-11 items-center justify-center border bg-white border-slate-200 shadow-xl rounded hover:text-slate-700 text-slate-400">
									<FaRegFileAlt className="text-xl" />
								</div>
								<span className="text-[11px] font-medium text-slate-600">Documents</span>
							</button>

							<button type="button" onClick={() => documentInputRef.current?.click()} className="flex flex-col items-center gap-1">
								<div className="flex h-11 w-11 items-center justify-center border bg-white border-slate-200 shadow-xl rounded hover:text-slate-700 text-slate-400">
									<FaRegFileAudio className="text-xl" />
								</div>
								<span className="text-[11px] font-medium text-slate-600">Audio</span>
							</button>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Emoji Picker Section */}
				<AnimatePresence>
					{openEmoji && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ duration: 0.4 }}
							className="absolute h-[400px] overflow-hidden top-[-400px] -right-2"
						>
							<Picker
								data={data}
								onEmojiSelect={handleEmojiSelect}
								theme="light"
								previewPosition="none"
								// skinTonePosition="none"
								// searchPosition="none"
								// navPosition="none"
								perLine={10}
								maxFrequentRows={1}
								className="w-full"
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</form>
	);
};

export default ChatInput;
