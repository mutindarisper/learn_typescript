// type Color = 'red' | 'green' | 'blue'

type ButtonProps = {
  style:{
    backgroundColor: string;
  color: string;
  fontSize?: number;
  // pillShape?: boolean;
  // padding?: [number, number, number, number]; // this is a tuple
  }

}

const Button = ({ style }: ButtonProps) => {

  // const backgroundColor = props.backgroundColor
  //we destructure the props here
  // const { backgroundColor } = props




  return (
    <>
      <button style={style} >Learn TypeScript</button>

    </>

  )
}

export default Button