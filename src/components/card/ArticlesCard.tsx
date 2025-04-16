import { SlArrowRight } from 'react-icons/sl';
export default function ArticlesCard() {
	return (
		<div className="py-4 px-3 bg-white rounded-xl shadow-md border border-slate-100">
			<h2 className="text-lg font-semibold mb-2 text-slate-700 px-2">Find an answer easily</h2>
			<p className="text-sm text-gray-500 mb-4 px-2">If you're in a hurry, send us a message and we will get back to you asap</p>

			<h2 className="text-base font-semibold mb-2 text-slate-500 px-1.5">Suggested articles</h2>
			<ul className="mt-3 space-y-1 text-sm">
				<li className="py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700">
					<span className="line-clamp-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi
						veritatis aperiam dolores explicabo? Tempora!{' '}
					</span>

					<SlArrowRight className="ml-5 flex-shrink-0 text-[10px]" />
				</li>
				<li className="py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700">
					<span className="line-clamp-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi
						veritatis aperiam dolores explicabo? Tempora!{' '}
					</span>

					<SlArrowRight className="ml-5 flex-shrink-0 text-[10px]" />
				</li>
				<li className="py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700">
					<span className="line-clamp-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi
						veritatis aperiam dolores explicabo? Tempora!{' '}
					</span>

					<SlArrowRight className="ml-5 flex-shrink-0 text-[10px]" />
				</li>
			</ul>
		</div>
	);
}
