import { FormEvent } from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

type logos = { icon: IconType; url: string };
const logos: logos[] = [
  { icon: FaGithub, url: "https://github.com/Yug3ne" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/eugenekoech9/" },
  { icon: FaXTwitter, url: "https://x.com/_Yu_gene__" },
];

const Contact = () => {
  // const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setResult("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_MAIL_PUBLIC_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: {
        success: boolean;
        message: string;
        [key: string]: unknown;
      } = await response.json();

      if (data.success) {
        // setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Error", data);
        // setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Fetch error", error);
      // setResult("An unexpected error occurred");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="bg-neutral-500 p-1 rounded-2xl h-[400px] md:h-[300px] md:w-[700px]">
        <div className="w-full  bg-bDark rounded-lg p-8 h-full md:w-full">
          <h1 className="text-4xl font-medium text-gray-200 text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-center text-sm mb-6">
            Have an idea, project, or just want to connect? I’m always open to
            new opportunities, creative collaborations, or even a quick
            conversation over coffee (virtual or real). Whether you're looking
            to build something together or simply want to say hello, feel free
            to drop a message — I’d love to hear from you.
          </p>
          <div className="flex justify-center space-x-6 mb-2">
            <div className="flex items-center gap-4 ">
              {logos.map(({ icon: Icon, url }, index) => (
                <Link
                  className="bg-[#0b030352] flex justify-center items-center p-4 rounded-2xl hover:bg-[#25212152]"
                  key={index}
                  to={url}
                >
                  <Icon
                    key={index}
                    size={32}
                    color="white"
                    className="transition-transform duration-200 hover:scale-95 hover:bg-[#25212152]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-500 p-1 rounded-2xl w-full md:w-[700px]">
        <div className="w-full  bg-bDark rounded-lg p-6">
          <form className="space-y-4 md:p-16" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-400 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full bg-bDark border-0 rounded-md p-2 text-gray-300 focus:outline-none ring-1 focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-bDark border-0 rounded-md p-2 text-gray-300 focus:outline-none ring-1 focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-gray-400 mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full bg-bDark border-0 rounded-md p-2 text-gray-300 focus:outline-none ring-1 focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full bg-bDark border-0 rounded-md p-2 ring-1 text-gray-300 min-h-[120px] focus:outline-none focus:ring-1 focus:ring-gray-500 resize-none"
                required
              />
            </div>

            <button className="flex items-center p-3 gap-3 text-2xl bg-[#0e0c0c52] border border-bDark font-roboto rounded-md text-tlight transition-transform duration-200 hover:scale-95 hover:bg-[#25212152]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
