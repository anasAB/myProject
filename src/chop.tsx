
import { IChop } from './Typing/chop';

const Chop = (props:IChop) => {
    const { data, template } = props
   
    if (data && template) {
        return (
            <div style={{ color: 'green' }}>
                <p>{template}</p>
            </div>
        )
    } else {
        return (
            <div style={{ color: 'red' }}>
                <p>template and dataset are mandatory parameters</p>
            </div>
        )
    }
}


export default Chop