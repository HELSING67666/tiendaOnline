import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard(props) {
  return (
    <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={props.imageUrl} alt={props.title}/>
            </figure>
            <p className='text-sm font-light'>{props.title}</p>
        </div>
        <div className='flex items-center gap-2'> 
            <p className='text-lg font-medium'>$ {props.price}</p>
            <XMarkIcon onClick={()=>props.handleDelete(props.id)} className="h-6 w-6 text-black-500"></XMarkIcon>
        
        </div>
    </div>
  )
}

export {OrderCard}