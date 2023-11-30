// type Color = 'red' | 'green' | 'blue'

type ButtonProps = {
  // style:{
  //   backgroundColor: string;
  // color: string;
  // fontSize?: number;
  // // pillShape?: boolean;
  // // padding?: [number, number, number, number]; // this is a tuple
  // }
  // style: React.CSSProperties,
  // onClick: () => number,
  // children:React.ReactNode //passing all react elements, text etc
  //to specify the children to elements only
  // children: JSX.Element
  setCount:React.Dispatch<React.SetStateAction<number>>

}

const Button = ({
  //  style,  onClick, children
setCount
   }: ButtonProps) => {

  // const backgroundColor = props.backgroundColor
  //we destructure the props here
  // const { backgroundColor } = props

setCount(1)


  return (
    <>
      <button > Learn TypeScript
      
      </button>

    </>

  )
}

export default Button