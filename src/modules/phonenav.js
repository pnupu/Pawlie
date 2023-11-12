function PhoneNav({ selected, setSelected }) {
  console.log(selected)
  const handleNavClick = (screen) => {
    setSelected(screen);
  };
  return (
    <div className="flex justify-center gap-3 items-center py-2 border-t border-neutral-hover">
      <button
        id="campaign-button"
        className={`h-12 w-12 flex items-center justify-center ${selected === 'campaign' ? 'bg-[#EAF2FF]' : 'bg-white hover:bg-neutral'} rounded-lg transition-all`}
        onClick={() => handleNavClick('campaign')}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5C1 2.79086 2.79086 1 5 1C7.20914 1 9 2.79086 9 5C9 7.20914 7.20914 9 5 9C2.79086 9 1 7.20914 1 5Z"
            fill={selected === 'campaign' ? "#4D8EFF" : "#808080"} 
          />
          <path
            d="M15 19C15 16.7909 16.7909 15 19 15C21.2091 15 23 16.7909 23 19C23 21.2091 21.2091 23 19 23C16.7909 23 15 21.2091 15 19Z"
            fill={selected === 'campaign' ? "#4D8EFF" : "#808080"} 
          />
          <path
            d="M15.3531 6.06507C14.5699 6.00083 13.4769 6 11.9344 6H11.5C10.9477 6 10.5 5.55229 10.5 5C10.5 4.44772 10.9477 4 11.5 4H11.9847C13.4658 3.99999 14.6415 3.99998 15.5166 4.07176C15.9623 4.10831 16.3749 4.16645 16.7361 4.26872C17.0962 4.37071 17.4674 4.53362 17.771 4.82093C18.5209 5.53055 18.8532 6.57592 18.6508 7.58832C18.5688 7.99822 18.3599 8.34552 18.1247 8.63678C17.8889 8.92882 17.5857 9.21455 17.2429 9.50177C16.5699 10.0657 15.61 10.7446 14.4008 11.5999L12.3366 13.06L12.3275 13.0665L10.2952 14.504C9.03591 15.3947 8.14403 16.0265 7.54168 16.5313C7.24297 16.7816 7.05051 16.9722 6.93141 17.1197C6.83283 17.2418 6.81192 17.301 6.80979 17.3072C6.74386 17.6426 6.85381 17.9884 7.10132 18.2242C7.10666 18.228 7.1579 18.2643 7.30888 18.307C7.4913 18.3587 7.7585 18.4032 8.14691 18.435C8.93014 18.4993 10.0232 18.5001 11.5656 18.5001H12.5C13.0523 18.5001 13.5 18.9478 13.5 19.5001C13.5 20.0524 13.0523 20.5001 12.5 20.5001H11.5154C10.0343 20.5001 8.85854 20.5001 7.98342 20.4283C7.53772 20.3918 7.12512 20.3336 6.76396 20.2314C6.40379 20.1294 6.03268 19.9665 5.72905 19.6791C4.97913 18.9695 4.6468 17.9242 4.84926 16.9118C4.93124 16.5019 5.14014 16.1546 5.3753 15.8633C5.61109 15.5713 5.91438 15.2855 6.25714 14.9983C6.55071 14.7523 6.89886 14.4844 7.29848 14.1896C7.33639 14.1524 7.37778 14.1177 7.42256 14.086L13.2048 9.99611C14.4641 9.1054 15.356 8.47355 15.9584 7.96881C16.2571 7.71852 16.4495 7.5279 16.5686 7.38039C16.6672 7.25831 16.6881 7.19913 16.6902 7.19289C16.7562 6.8575 16.6462 6.51164 16.3987 6.2759C16.3934 6.27206 16.3422 6.23582 16.1911 6.19306C16.0087 6.1414 15.7415 6.09692 15.3531 6.06507Z"
            fill={selected === 'campaign' ? "#4D8EFF" : "#808080"} 
          />
        </svg>
      </button>
      <button
        id="pawlie"
        className={`h-12 w-12 flex items-center justify-center ${selected === 'pawlie' ? 'bg-[#EAF2FF]' : 'bg-white hover:bg-neutral'} rounded-lg transition-all`}
        onClick={() => handleNavClick('pawlie')}
      >

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 9.5C7 6.73858 9.23858 4.5 12 4.5C14.7614 4.5 17 6.73858 17 9.5C17 12.2614 14.7614 14.5 12 14.5C9.23858 14.5 7 12.2614 7 9.5Z"
            fill={selected === 'pawlie' ? "#4D8EFF" : "#808080"} 
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.2211 20.1954 16.2543 18.8618 17.824C17.9457 16.7114 16.5564 16 15 16H9.00005C7.44368 16 6.05439 16.7114 5.13825 17.8241C3.8046 16.2543 3 14.2211 3 12Z"
            fill={selected === 'pawlie' ? "#4D8EFF" : "#808080"} 
          />
        </svg>
      </button>
      <button
        id="inactive"
        className={`h-12 w-12 flex items-center justify-center ${selected === 'leaderboard' ? 'bg-[#EAF2FF]' : 'bg-white hover:bg-neutral'} rounded-lg transition-all`}
        onClick={() => handleNavClick('leaderboard')}

      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 12C23 5.92536 18.0759 1.0008 12.0015 1H11.9977C5.92364 1.00123 1 5.92562 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM3.43938 9.2144C4.32711 6.4844 6.4844 4.32711 9.21439 3.43939C8.68267 4.23987 8.27225 5.12289 7.95848 6.03385C7.79041 6.52182 7.64837 7.02245 7.52936 7.52936C7.02245 7.64837 6.52182 7.79041 6.03385 7.95848C5.12289 8.27225 4.23987 8.68267 3.43938 9.2144ZM3.43938 14.7856C4.32711 17.5156 6.4844 19.6729 9.2144 20.5606C8.68267 19.7601 8.27226 18.8771 7.95849 17.9662C7.79041 17.4782 7.64837 16.9775 7.52936 16.4706C7.02245 16.3516 6.52182 16.2096 6.03385 16.0415C5.12289 15.7277 4.23987 15.3173 3.43938 14.7856ZM9.69839 16.8459C9.74596 17.004 9.79628 17.1604 9.84946 17.3148C10.3328 18.7181 11.0337 19.9041 12 20.7442C12.9663 19.9041 13.6672 18.7181 14.1505 17.3148C14.2037 17.1604 14.254 17.004 14.3016 16.8459C13.5277 16.9366 12.7601 16.9844 12.0208 16.9998C12.0069 17.0001 11.9931 17.0001 11.9792 16.9998C11.2399 16.9844 10.4723 16.9366 9.69839 16.8459ZM14.765 14.765C13.8468 14.9072 12.9105 14.98 12 14.9998C11.0895 14.98 10.1532 14.9072 9.23502 14.765C9.09276 13.8468 9.02 12.9105 9.00023 12C9.02 11.0895 9.09276 10.1532 9.23502 9.23502C10.1532 9.09276 11.0895 9.01999 12 9.00023C12.9105 9.01999 13.8468 9.09276 14.765 9.23502C14.9072 10.1532 14.98 11.0895 14.9998 12C14.98 12.9105 14.9072 13.8468 14.765 14.765ZM16.4706 16.4706C16.3516 16.9775 16.2096 17.4782 16.0415 17.9661C15.7277 18.8771 15.3173 19.7601 14.7856 20.5606C17.5156 19.6729 19.6729 17.5156 20.5606 14.7856C19.7601 15.3173 18.8771 15.7277 17.9662 16.0415C17.4782 16.2096 16.9776 16.3516 16.4706 16.4706ZM20.5606 9.2144C19.6729 6.4844 17.5156 4.32712 14.7856 3.43939C15.3173 4.23987 15.7277 5.12289 16.0415 6.03385C16.2096 6.52182 16.3516 7.02245 16.4706 7.52936C16.9776 7.64837 17.4782 7.79041 17.9662 7.95848C18.8771 8.27225 19.7601 8.68267 20.5606 9.2144ZM16.8459 9.69839C17.004 9.74596 17.1604 9.79628 17.3148 9.84945C18.7181 10.3328 19.9041 11.0337 20.7442 12C19.9041 12.9663 18.7181 13.6672 17.3148 14.1505C17.1604 14.2037 17.004 14.254 16.8459 14.3016C16.9366 13.5277 16.9844 12.7601 16.9998 12.0208C17.0001 12.0069 17.0001 11.9931 16.9998 11.9792C16.9844 11.2399 16.9366 10.4723 16.8459 9.69839ZM14.3016 7.15412C14.254 6.99597 14.2037 6.83957 14.1505 6.68517C13.6672 5.28189 12.9663 4.09587 12 3.25583C11.0337 4.09587 10.3328 5.2819 9.84945 6.68518C9.79628 6.83957 9.74595 6.99597 9.69839 7.15412C10.4723 7.06344 11.2399 7.01562 11.9792 7.00022C11.9931 6.99993 12.0069 6.99993 12.0208 7.00022C12.7601 7.01562 13.5277 7.06344 14.3016 7.15412ZM7.15412 9.69839C7.06344 10.4723 7.01562 11.2399 7.00022 11.9792C6.99993 11.9931 6.99993 12.0069 7.00022 12.0208C7.01562 12.7601 7.06344 13.5277 7.15412 14.3016C6.99597 14.254 6.83957 14.2037 6.68518 14.1505C5.2819 13.6672 4.09587 12.9663 3.25583 12C4.09587 11.0337 5.2819 10.3328 6.68518 9.84945C6.83957 9.79627 6.99597 9.74595 7.15412 9.69839Z"
            fill={selected === 'leaderboard' ? "#4D8EFF" : "#808080"} 
            fillOpacity="0.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default PhoneNav;
