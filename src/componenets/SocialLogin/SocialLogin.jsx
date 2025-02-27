import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignInWithGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        image: result.user?.photoURL,
      };
      axiosPublic.post("/user", userInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful! Welcome back.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div>
      <div className="flex justify-center">
        <button onClick={handleSignInWithGoogle} className="text-3xl">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
