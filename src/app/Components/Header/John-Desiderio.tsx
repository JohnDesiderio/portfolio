interface IJohnDesiderio {
    selected: boolean,
}

const JohnDesiderio = (props: IJohnDesiderio) => {
    
    if (!props.selected) {
        return (
            <div className="w-2/5">
                <div 
                    className='float-left pl-[6.25rem] font-bold hover:text-yellow-900'
                >
                    <a href='/'>John Desiderio</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-2/5">
                <div 
                    className='float-left pl-[6.25rem] font-bold'
                >
                    John Desiderio
                </div>
            </div>
        )
    }
}

export default JohnDesiderio;