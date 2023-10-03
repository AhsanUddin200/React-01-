import { useState } from "react";
export default function Display() {
const [display,setCurrentDisplay] = useState('')


return(
<div class="display">

  <nav>
    <h3>To list</h3>
    <h3>New Quotes</h3>
    <h3>Question and Answers</h3>
    <h3>Videos</h3>
    <h3>Picture</h3>
  </nav>
</div>

)
}