import React, {useState} from 'react'
import "./textform.css"



export default function Buttons() {
  return (
    <div>
        <button type="button" id="uppercase" class="btn btn-primary">Convert text to uppercase </button>
    <button type="button" id="lowercase" class="btn btn-primary">Convert text to lowercase  </button>
    <button type="button" id="toggle" class="btn btn-primary">Toggle the text</button>

    </div>
  )
}
