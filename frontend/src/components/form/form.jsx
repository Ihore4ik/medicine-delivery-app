import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="name*"
        autoComplete="off"
        {...register("name", { required: true })}
      />
      <input
        type="email"
        placeholder="email*"
        autoComplete="off"
        {...register("email", { required: true })}
      />
      <input
        type="number"
        placeholder="phone*"
        autoComplete="off"
        {...register("phone", { required: true })}
      />
      <input
        type="text"
        placeholder="address*"
        autoComplete="off"
        {...register("address", { required: true })}
      />
    </form>
  );
};
