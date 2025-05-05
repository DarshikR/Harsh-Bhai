const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-8">We'd love to hear from you!</p>
            <form className="w-full max-w-md">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full mb-4"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full mb-4"
                />
                <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered w-full mb-4"
                ></textarea>
                <button className="btn btn-primary w-full">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;