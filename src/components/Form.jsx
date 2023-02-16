import Input from "./Input";
import Button from "./Button";
const Form = (props) => {
  return (
    <>
      <Input type="text" placeholder="Enter username" />
      <Input type="password" placeholder="Enter password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm password" />
      )}
      {props.isRegistered ? (
        <Button type="submit" text="Login" />
      ) : (
        <Button type="submit" text="Register" />
      )}
    </>
  );
};
export default Form;
