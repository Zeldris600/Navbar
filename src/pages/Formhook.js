import React from "react";
//import bgImg from './assets/img1.jpg';
import { useForm } from "react-hook-form";
//const reactImage = require("../assets/img1 (1).jpg");
//import bgimg from "src/assets/img1 (1).jpg";

function Form2() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));

  return (
    <div className="App">
      <section>
        <div className="register">
          <div className="col-1">
            <h2>Sign In</h2>
            <span>register and enjoy the service</span>

            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                {...register("username")}
                placeholder="username"
              />
              <input
                type="text"
                {...register("password")}
                placeholder="password"
              />
              <input
                type="text"
                {...register("confirmpwd")}
                placeholder="confirm password"
              />
              <input
                type="text"
                {...register("mobile", { required: true, maxLength: 10 })}
                placeholder="mobile number"
              />
              {errors.mobile?.type === "required" &&
                "Mobile Number is required"}
              {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
              <button className="btn">Sign In</button>
            </form>
          </div>
          <div className="col-2">
            <img src="./assets/img1 (1).jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Form2;
