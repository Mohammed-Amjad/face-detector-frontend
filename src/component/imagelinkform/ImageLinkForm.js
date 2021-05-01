import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit, onEnter}) => {
    return (
        <div>
            <p className='f3 centre'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='centre'>
                <div className='form centre pa3 br3 shadow-5'>
                    <input className='f4 pa2 w-70 centre' type='text' onChange={onInputChange} onKeyUp={onEnter} placeholder="insert your image's URL here"/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;