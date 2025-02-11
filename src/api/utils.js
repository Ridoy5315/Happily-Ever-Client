import useAxiosPublic from "../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export const imageUpload = async (image) => {
     const axiosPublic = useAxiosPublic();
     const formData = new FormData();
     formData.append("image", image);

     //send image data to imgbb
     const {data} = await axiosPublic.post(image_hosting_api, formData);

     return data;
}