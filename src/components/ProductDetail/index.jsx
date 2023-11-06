import { VscClose } from 'react-icons/vsc'

export const ProductDetail = () => {
    return (
        <aside className="w-[30rem] max-w-sm h-[calc(100vh-68px)] rounded-md shadow-md fixed right-0 top-16 p-6 bg-white">
            <div className='flex justify-between'>
                <h1>Detail</h1>
                <span className='w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-sm'>
                    <VscClose/>
                </span>
            </div>
        </aside>
    )
}