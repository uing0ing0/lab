import axios from "axios";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/Font";
import {
  userEmailAtom,
  userNameAtom,
  userPasswordAtom,
  userTokenAtom,
} from "src/utils/Atom";
import styled from "styled-components";

import Button, { ButtonVariant } from "../button/Button";
import Flex from "../containers/flex/Flex";
import StylelessLink from "../stylelessLink/StylelessLink";
import Text from "../text/Text";
const Bar = styled.div<{ bgColor: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};

  box-sizing: border-box;
  padding: 0.3rem 1rem;
`;
const MenuSum = styled(Flex)`
  display: flex;
  align-items: center;
  gap: 0;
  justify-content: center;
`;
const Navbar = () => {
  const navigate = useNavigate();
  const [userPassword, setUserPassword] = useAtom(userEmailAtom);
  const [userEmail, setUserEmail] = useAtom(userPasswordAtom);
  const [userToken, setUserToken] = useAtom(userTokenAtom);
  const [userName, setUserName] = useAtom(userNameAtom);
  const handleLogin = () => {
    console.log("Login");
    navigate("/login");
  };
  const handleLogo = () => {
    console.log("Logo");
    navigate("/");
  };
  const handleMake = () => {
    console.log("Make");
    navigate("/makecard");
  };
  const handleLogout = async () => {
    console.log("Logout");
    const api = axios.create({
      baseURL: "/api",
      withCredentials: true,
    });
    console.log(userToken);
    const res = await api
      .post("/my/sign-out", null, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setUserName("");
          setUserPassword("");
          setUserEmail("");
          setUserToken("");
          navigate("/");
          console.log("logout");
        }
      });
  };
  return (
    <>
      <Bar
        bgColor={"transparent"}
        style={{
          color: colorSet.text,
        }}
      >
        <StylelessLink to={"/"}>
          <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            wrap={"nowrap"}
            gap={"10px"}
          >
            <Text size="1.1rem" font={Font.Bold}>
              Main
            </Text>
          </Flex>
        </StylelessLink>
        <MenuSum></MenuSum>
      </Bar>
    </>
  );
};

export default Navbar;
