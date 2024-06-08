import {Slidecss} from './Slidecss'
export const Smallslide = ({image,para})=>{
    return <Slidecss>
        <div>
            <img src={image} alt="" className='h-20 w-20'/>
        </div>
        <div>
            <p>
       {para}
            </p>
        </div> 
    </Slidecss>
}