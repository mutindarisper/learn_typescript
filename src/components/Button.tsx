// type Color = 'red' | 'green' | 'blue'

type ButtonProps = {
  // style:{
  //   backgroundColor: string;
  // color: string;
  // fontSize?: number;
  // // pillShape?: boolean;
  // // padding?: [number, number, number, number]; // this is a tuple
  // }
  style: React.CSSProperties,
  onClick: () => number

}

const Button = ({ style,  onClick }: ButtonProps) => {

  // const backgroundColor = props.backgroundColor
  //we destructure the props here
  // const { backgroundColor } = props




  return (
    <>
      <button style={style} onClick={onClick}>Learn TypeScript</button>

    </>

  )
}

export default Button