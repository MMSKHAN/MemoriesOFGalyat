import { Html } from '@react-three/drei'
import React from 'react'

function Form() {
  return (
    <>
      <Html position={[-0.8, 0.3, 0.06]} scale={0.09} transform occlude >
       <div className='nft'  >
       <input type="text" placeholder='Address' />
        <input type="text" placeholder='NFT Name' />
        <input type="text" placeholder='NFT Descryption' />
        <input type="number" placeholder='NFT Price' />
        <div class="file-input-container">
  <input type="file" id="fileInput" class="file-input" />
  <label for="fileInput" class="file-label">Choose Your NFT</label>
</div>
        <label/>
        <button>Create</button>
       </div>
      </Html>  
    </>
  )
}

export default Form
