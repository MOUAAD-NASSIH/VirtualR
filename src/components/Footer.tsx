import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md sm:text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resource, index) => (
              <li
                key={index}
                className="text-sm sm:text-[16px] font-extralight tracking-wide mb-2"
              >
                <a
                  className="text-neutral-300 hover:text-white"
                  href={resource.href}
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md sm:text-xl font-semibold mb-4">Platforms</h3>
          <ul className="space-y-2">
            {platformLinks.map((resource, index) => (
              <li
                key={index}
                className="text-sm sm:text-[16px] font-extralight tracking-wide mb-2"
              >
                <a
                  className="text-neutral-300 hover:text-white"
                  href={resource.href}
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md sm:text-xl font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((resource, index) => (
              <li
                key={index}
                className="text-sm sm:text-[16px] font-extralight tracking-wide mb-2"
              >
                <a
                  className="text-neutral-300 hover:text-white"
                  href={resource.href}
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
