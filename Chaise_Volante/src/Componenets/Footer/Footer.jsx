import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-orange-200 text-white p-1 mt-auto fixed bottom-0 w-full">
    <div className="container mx-auto text-center">
      <div className="flex flex-col lg:flex-row justify-between items-center">
      <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <a className="hover:underline">Mail</a>
                      </li>
                      <li>
                          <a className="hover:underline">Adresse</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <a href="#" className="hover:underline">Guide d'Entretien</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Livraisons</a>
                      </li>
                  </ul>
                  </div>
                  <div className="flex space-x-4">
                    <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Suivez nous :</p>
                  <a href='#' className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <span className="sr-only">Facebook</span>
        <svg className="w-6 h-6" fill='currentColor' viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
        </svg>
    </a>
                  <a href='#' className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <span className="sr-only">Instagram</span>
        <svg className="w-6 h-6" fill='currentColor' viewBox="0 0 20 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
        </svg>
    </a>
    
                 <a href='#' className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <span className="sr-only">X</span>
        <svg className="w-6 h-6" fill='currentColor' viewBox="0 0 20 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" clip-rule="evenodd"></path>
        </svg>
    </a>
        </div>
      </div>
    </div>
    <div className="container mx-auto text-center">
      <p className="mb-0,9 text-sm font-normal text-gray-900 uppercase dark:text-white">
        © 2024 Les Chaises Volantes. Tous droits réservés.</p>
    </div>
  </footer>
  )
}

export default Footer