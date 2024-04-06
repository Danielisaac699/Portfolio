function Contact( ) {
  return (
    <>
      <div className="flex flex-col justify-center mt-24 h-screen font-bold" id="contact">
        <h1
          className="text-4xl font-bold underline text-center text-white"
          id="Contact"
        >
          <b className="text-[#0ef] text-5xl">C</b>ontact
        </h1>
        <p className="mt-2 text-center">
          Feel free to send me a message and i will get back to you ASAP
        </p>
        <fieldset className="-mt-5 p-10 space-y-3 sm:mx-[20%]">
          <div className=" flex flex-col text-start">
            <label htmlFor="text">Name</label>
            <input
              className="p-3 border-2 border-[#0ef] bg-[#1f242d] bg-transparent"
              placeholder="Enter you Name"
              type="text"
              required
            />
          </div>

          <div className=" flex flex-col text-start">
            <label htmlFor="text">Email</label>
            <input
              className="p-3 border-2 border-[#0ef] bg-[#1f242d] bg-transparent"
              placeholder="Enter you Email
       
       "
              type="text"
            />
          </div>

          <div className=" flex flex-col text-start ">
            <label htmlFor="text">Message</label>
            <textarea
              className=" border-2 border-[#0ef] bg-transparent"
              placeholder="Enter you message"
              name="text"
              id="text"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="px-5 py-3 rounded-md shadow-lg border-2 border-[#0ef] hover:bg-[#0ef]">
            Let&apos;s Talk
          </button>
        </fieldset>
      </div>
    </>
  );
}

export default Contact;