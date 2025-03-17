import Link from "next/link";

export default function Avatars() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center">
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
            <Link
              href="#"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="h-60 object-cover"
              />
              <div className="px-6 py-4">
                <div className="flex">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844"
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-base font-bold">Laila Bahar</h6>
                    <div className="flex flex-col lg:flex-row">
                      <p className="text-sm text-gray-500">Sept 28, 2022</p>
                      <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                        -
                      </p>
                      <p className="text-sm text-gray-500">6 mins read</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
