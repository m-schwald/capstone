### a modal

```js
import Button from "./Button";
import useState from "react";

const [open, setOpen] = useState(false);

<>
  <Button onClick={setOpen(!open)}> show modal </Button>

  <StyledModal shop={open}>
    <h5> this is a headline inside the modal </h5>
    <p> and here is some text </p>
  </StyledModal>
</>;
```
