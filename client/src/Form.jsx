
const Form = () => {
   const handleSubmit = () => {

   }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 bg-white shadow rounded space-y-4" >
      <input
        type="text"
        name="name"
        placeholder="Task Description"
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add Task
      </button>
    </form>
  );
};

export default Form;