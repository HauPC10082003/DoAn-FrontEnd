import { Link, Outlet } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div class="top-banner-block">
            <p><a href="https://www.fahasa.com/dinh-ti?fhs_campaign=topbanner"><img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/NCCDinhTiT1131_Header_1263x60.jpg" alt=""/></a></p>        </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <p class="navbar-brand" >
            BookStore
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <p class="nav-link active" aria-current="page">
                  <Link to="/">Home</Link>
                </p>
              </li>
              <li class="nav-item">
                <p class="nav-link">
                  {" "}
                  <Link to="/products">Products</Link>
                </p>
              </li>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </p>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <p class="dropdown-item" href="#">
                      Action
                    </p>
                  </li>
                  <li>
                    <p class="dropdown-item" href="#">
                      Another action
                    </p>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <p class="dropdown-item" href="#">
                      Something else here
                    </p>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <p
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </p>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      
      <Slider {...settings}>
        <div className="slideshow">
          <img src="/assets/images/slide_1.jpg" alt="Slide 1" />
        </div>
        <div className="slideshow"> 
          <img src="/assets/images/slide_2.jpg" alt="Slide 2" />
        </div>
        <div className="slideshow">
          <img src="/assets/images/slide_3.jpg" alt="Slide 3" />
        </div>
        <div className="slideshow">
          <img src="/assets/images/slide_4.jpg" alt="Slide 4" />
        </div>
        <div className="slideshow">
          <img src="/assets/images/slide_5.jpg" alt="Slide 5" />
        </div>
      </Slider>
      <div class="container" style={{marginBottom:'10px'}}>
        <div class="row" >
          <div class="col-3">
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/11Mot_Smallbanner_310x210.png" alt="Ảnh minh họa 1" />
          </div>
          <div class="col-3">
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/TrangThieuNhiT923_Banner_SmallBanner_310x210-22_1.png" alt="Ảnh minh họa 2" />
          </div>
          <div class="col-3">
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/20_11_mainbanner_Smallbanner_310x210.png" alt="Ảnh minh họa 3" />
          </div>
          <div class="col-3">
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/TopSanPhamT1023_Banner_SmallBanner_310x210.png" alt="Ảnh minh họa 4" />
          </div>
        </div>
      </div>
      <Outlet />

  <div class="container my-5">

    <footer
            class="text-center text-lg-start text-white footer-background"
            >
      <section
              class="d-flex justify-content-between p-4"
              >
        <div class="me-5">
          <span>Liên hệ với chúng tôi:</span>
        </div>

        <div>
          <a href="facebook.com" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="twitter.com" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="google.com" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="instagram.com" class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="linkedin.com" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="github.com" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Cửa hàng Bán Sách</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto footer-shop"
                  />
              <p>
                Tại đây có bán tất cả loại sách , đa dạng ,phong phú
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Products</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto footer-product"
                  />
              <p>
                <a href="#!" class="text-white">MDBootstrap</a>
              </p>
              <p>
                <a href="#!" class="text-white">MDWordPress</a>
              </p>
              <p>
                <a href="#!" class="text-white">BrandFlow</a>
              </p>
              <p>
                <a href="#!" class="text-white">Bootstrap Angular</a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Useful links</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto footer-usefull"
                  />
              <p>
                <a href="#!" class="text-white">Your Account</a>
              </p>
              <p>
                <a href="#!" class="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" class="text-white">Shipping Rates</a>
              </p>
              <p>
                <a href="#!" class="text-white">Help</a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto footer-contact"
                  />
              <p><i class="fas fa-home mr-3"></i> 65 Đ. Huỳnh Thúc Kháng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh 700000, Việt Nam  </p>
              <p><i class="fas fa-envelope mr-3"></i> bookstore@gmail.com</p>
              <p><i class="fas fa-phone mr-3"></i> 0817287365</p>
              <p><i class="fas fa-print mr-3"></i> 0817287365</p>
            </div>
          </div>
        </div>
      </section>

      <div
          class="text-center p-3 footer-end"
          >
        © 2023 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/"
          > BookStore.com</a
          >
      </div>
    </footer>

  </div>
    </>
  );
};

export default Layout;
