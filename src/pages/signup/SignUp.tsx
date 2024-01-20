import axios from "axios";
import { useAtom } from "jotai";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
//import { useNavigate } from "react-router-dom";
import Navbar from "src/atoms/navbar/Navbar";
import SearchInput from "src/atoms/searchInput/SearchInput";

import {
  userEmailAtom,
  userNameAtom,
  userPasswordAtom,
} from "../../utils/Atom";
const Signup = () => {
  const [userEmail, setUserEmail] = useAtom(userEmailAtom);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);
  const [name, setUserName] = useAtom(userNameAtom);
  const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });
  const handleSignUp = async () => {
    const data = {
      email: userEmail,
      password: userPassword,
      name: name,
    };
    const res = await api.post("/auth/signup", data);
    console.log(res);
  };
  return (
    <div className="container">
      <Flex flexDirection="column" alignItems="center" gap="15px">
        <Button variant={ButtonVariant.outlined}>
          <SearchInput
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Button>
        <Button variant={ButtonVariant.outlined}>
          <SearchInput
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </Button>
        <Button variant={ButtonVariant.outlined}>
          <SearchInput
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </Button>
        <Button
          width={"270px"}
          height={"40px"}
          variant={ButtonVariant.contained2}
          type="button"
          onClick={() => {
            handleSignUp();
          }}
          className="form-container"
        >
          회원가입
        </Button>
      </Flex>
    </div>
  );
};

export default Signup;
