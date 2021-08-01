
// type SupportedData = Object


interface data {
    bread: string,
    cheese: string,
}


const Chop = (data: data, template: string) => {
    console.log('data-->', data);
    console.log('template-->', template);

    if (data && template) {
        return console.log(template);
    }

    alert('template and dataset are mandatory parameters')
}

export default Chop