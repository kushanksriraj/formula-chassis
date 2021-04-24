export const Navigation = () => {
  return (
    <div className="m-4 p-v-8 p-h-5 box-shadow border-1 h-100">
      <div className="heading-2">Navigation</div>
      <div className="separator" />
      <div className="para-normal">
        The navigation can be used in a nav bar.
      </div>
      <div className="heading-3">Desktop</div>
      <div className="w-100 m-v-5 p-h-1">
        <nav className="w-100 bg-color-1 h-1-2 color-2 flex space-around align-center">
          <div className="link p-2 outline-white-dotted" tabIndex="0">
            HOME
          </div>
          <div className="link p-2 outline-white-dotted" tabIndex="0">
            ABOUT
          </div>
          <div className="link p-2 outline-white-dotted" tabIndex="0">
            MORE
          </div>
          <div className="link p-2 outline-white-dotted" tabIndex="0">
            CONTACT
          </div>
        </nav>
      </div>
      <div className="separator m-h-4 m-v-6"></div>
      <div className="heading-3">Mobile</div>
      <div className="w-100 m-v-5 p-h-1">
        <nav className="w-7 bg-color-1 h-1-2 color-2 flex align-center pos-rel">
          <div        
            className="link p-2 outline-white-dotted m-h-4 toggler"
            tabIndex="0"
          >
            <i className="fas fa-bars"></i>
          </div>
          <div className="w-100 text-center">BRANDNAME</div>
          <div className="w-100 bg-color-1 color-2 h-1 align-center space-even toggle pos-abs m-v-3">
            <div className="link p-2 outline-white-dotted" tabIndex="0">
              HOME
            </div>
            <div className="link p-2 outline-white-dotted" tabIndex="0">
              ABOUT
            </div>
            <div className="link p-2 outline-white-dotted" tabIndex="0">
              MORE
            </div>
            <div className="link p-2 outline-white-dotted" tabIndex="0">
              CONTACT
            </div>
          </div>
        </nav>
      </div>
      <div className="separator m-h-4 m-v-6"></div>
      <div className="heading-3">Dropdown options</div>
      <div className="preview m-6">
        <div className="dropdown pos-rel">
          <button className="btn color-1 bg-color-2 font-3 text-bold p-2 border-round-small">
            Dropdown
          </button>
          <div className="dropdown-content">
            <a href="#" className="link p-2">
              Link 1
            </a>
            <a href="#" className="link p-2">
              Link 2
            </a>
            <a href="#" className="link p-2">
              Link 3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
