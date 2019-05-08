import React from 'react'
import '../App.css'
import GenderButton from './GenderButton'
import ThicknessButton from './ThicknessButton'
import HairStyleButton from './HairStyleButton'
import HairColorButton from './HairColorButton'

export default function Nav(props){
        return (
            <div className="navBar">
                <GenderButton 
                handleUpdateGender={props.handleUpdateGender} 
                gender={props.gender}
                 />
                <ThicknessButton 
                handleUpdateThickness={props.handleUpdateThickness}
                thickness={props.thickness}
                />
                <HairStyleButton 
                hairStyle={props.hairStyle} 
                handleUpdateHairStyle={props.handleUpdateHairStyle}
                />
                <HairColorButton 
                hairColor={props.hairColor}
                handleUpdateHairColor={props.handleUpdateHairColor}
                />
                
            </div>
        )
}