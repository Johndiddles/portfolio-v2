import React from "react";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer>
      <div>
        <Container>
          <div className="py-4 md:py-10 font-inter text-xs md:text-base">
            <ul className="flex justify-center items-center gap-8">
              <li>
                <a
                  className="underline underline-offset-4 hover:decoration-[#C47B54]"
                  href=""
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-4 hover:decoration-[#C47B54]"
                  href="https://github.com/Johndiddles"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-4 hover:decoration-[#C47B54]"
                  href="https://x.com/Diddlescode"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-4 hover:decoration-[#C47B54]"
                  href="https://www.linkedin.com/in/john-adepelumi-52b22b128/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
