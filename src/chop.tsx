
import { IChop } from './Typing/chop';

const Chop = (props: IChop) => {
    const { data, template } = props

    if (data !== null) {
        if (typeof data.bread !== 'string' || typeof data.cheese !== 'string') {
            return <div style={{ color: 'orange' }}><p>Please Check your Entered data should be String</p></div>
        }
    }


    return (
        (data && template) ?
            <div style={{ color: 'green' }}>
                <p>{template}</p>
            </div>
            :
            <div style={{ color: 'red' }}>
                <p>template and dataset are mandatory parameters</p>
            </div>
    )
}


export default Chop