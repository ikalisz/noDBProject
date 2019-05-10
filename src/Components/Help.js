import React from 'react'
import swal from '@sweetalert/with-react'


export default function Help() {
    function handleInfo() {
        swal({
            icon: 'info',
            content: (
                <div>
                    <div>
                        <h2>How to make a post.</h2>
                        <p>Click '+ Make new character post'</p>
                        <img alt="" src={require('../helpImages/step1Pic.PNG')} />
                        <p>Go through the selectors and select a property for each selector</p>
                        <img alt="" src={require('../helpImages/step2Pic.PNG')}/>
                        <h4>All selectors must have a property selected or no image will pull up</h4>
                        <p>After all selectors have been given a property to select click the 'Generate' button</p>
                        <img alt="" src={require('../helpImages/step3Pic.PNG')} />
                        <p>After hitting generate and generating an image, you can enter in your caption text and then hit post which will create a post on The Fridge!</p>
                        <img alt="" src={require('../helpImages/step4Pic.PNG')} />
                        <h2>Now go make a post!</h2>
                    </div>
                </div>
            )
        })
    } 
    return (
        <h3 onClick={() => handleInfo()}>Help</h3>
    )
}