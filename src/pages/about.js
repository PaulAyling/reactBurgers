import React from 'react'
import CodeContainerMolecule from '../components/codeContainerMolecule'


const About = () => {  
  return (
    <div>
      <h1>About</h1>
      <h3>About React Burgers</h3>
    <CodeContainerMolecule 
    CodeContainerMolecule_Id="first molecule section"
    CodeContainerMolecule_Style="myStyle"
    textIsCode="0"
    text="my First molecule text"
    />

    </div>
  )
}

export default About