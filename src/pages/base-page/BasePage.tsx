import React, {
    CSSProperties,
    HTMLProps,
    PropsWithChildren,
    useEffect,
    useState
  } from "react";
  import { useLocation } from "react-router-dom";
  
  import Footer from "../../components/footer/Footer";
  import Header from "../../components/header/Header";
//   import { blogPath, fansPath } from "../../core/util/pathBuilder.util";
  // import "./base-page.scss";
  
  const BasePage = (
    props: PropsWithChildren<
      HTMLProps<unknown> & {
        displayFooter?: boolean;
        style?: CSSProperties;
        contentStyle?: CSSProperties;
        logoOnlyHeader?: boolean;
        header?: JSX.Element | null;
      }
    >
  ) => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!loading) {
        const hashtag = window.location.hash;
        if (!hashtag) {
            setTimeout(() => {
              window.scroll({ left: 0, top: 0, behavior: "smooth" });
  
              setTimeout(() => window.scroll({ left: 0, top: 0, behavior: "smooth" }), 700);
            }, 50);
        }
      }
      document.getElementById("chartjs-tooltip")?.remove();
    }, [location, loading]);
  
    useEffect(() => {
      setLoading(false);
    }, []);
  
    return (
      <div className={`base-page ${props.className || ""}`} style={props.style}>
        <div className="header-container">
          {props.header || <Header />}
        </div>
        <div className="base-page-content" style={props.contentStyle}>
          {props.children}
        </div>
        {props.displayFooter !== false && <Footer />}
      </div>
    );
  };
  
  export default BasePage;
  