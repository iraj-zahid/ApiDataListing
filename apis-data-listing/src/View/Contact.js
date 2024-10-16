const Contact = () => {
    return (
        <>
            <div className="w-full min-h-screen contactImg">
                <div className="w-full min-h-content pb-[10%] bg-[#0303038c]">
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="w-full p-[10%] flex items-center justify-center">
                            <p className="IBM text-8xl  max-[750px]:text-6xl font-bold text-white">CONTACT US</p>
                        </div>
                        <div className="w-full bg-white dark:bg-gray-900 dark:text-white p-[5%] flex max-[750px]:flex-col items-center justify-center">
                            <div className="w-[50%] max-[750px]:w-[80%] p-[6%] max-[750px]:flex items-center max-[750px]:justify-center max-[750px]:flex-col">
                                <p className="IBM font-bold text-2xl">have any queries?!</p>
                                <p className="text-5xl font-bold IBM max-[750px]:text-center">WE'RE HERE TO HELP!</p>
                                <p className="text-xl IBM max-[750px]:text-center">Cras elementum finibus lacus nec lacinia. Quisque non paralit convallis nisl, eu condimentum sem. Proin dignissim libero kar lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
                            </div>
                            <div className="w-[50%] max-[750px]:w-[80%] p-[1%] max-[750px]:py-[4%]">
                                {/* the code of contact form */}
                                <section class="bg-white dark:bg-gray-900">
                                    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                        <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Here</h2>
                                        <form action="#" class="space-y-8">
                                            <div>
                                                <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                                            </div>
                                            <div>
                                                <label for="subject" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                                <input type="text" id="subject" class="block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                                            </div>
                                            <div class="sm:col-span-2">
                                                <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                                <textarea id="message" rows="6" class="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                            </div>
                                            <button type="submit" class="py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact