import { motion, useMotionValue, useScroll, useTransform, useInView} from "framer-motion";

import { useEffect, useRef, useState } from "react";
//import { useInView } from "react-intersection-observer";
import useWindowSize from "../../helper/useWindowSize";



const Aboutme = () => {
  // Initialize state for the x and y position of the mouse

  // Get the current width and height of the window
/*   const { width, height } = useWindowSize();
  const reff = useRef(null);
  const { scrollY } = useScroll({ target:reff });
console.log(reff.current)
  scrollY.onChange(() => {
    console.log();
  });

 */

  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
const { width, height } = useWindowSize()
  const isInView=useInView(ref)
  const [showUlistration,setShowUlistration]=useState(false)
  const [clientY,setClientY]=useState<number>()
  const [range,setRange]=useState<number[]>([0,0])
  const pathLength=useTransform(scrollY,range,[0,1])

  useEffect(() => {

    if(isInView) {
      console.log(scrollY.get())
      setShowUlistration(true)
      setClientY(scrollY.get())
      setRange([scrollY.get(),scrollY.get()+(height*4)])
    }
    else{
      setShowUlistration(false)
    }
   /*  const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        console.log('Element has entered the viewport! Scroll position:', scrollY.get());
      }
    });
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    }; */
  }, [isInView]);




  return (
    <motion.section
  //  ref={ref}
      // onScroll={(e)=>{console.log('scrollon run')}}
      // onMouseMove={}
     
      className="relative  overflow-hidden bg-[#151a24] "
    >
      <div  className=" w-full overflow-hidden bg-[#151a24]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#24324f"
            fillOpacity="1"
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className=" flex items-center   justify-center  text-clip  bg-clip-border">
        <p className=" p-10  text-left font-Allerta text-[6vw] font-medium leading-relaxed text-white  sm:text-[4vw] md:text-[4vw] md:text-white  ">
          I am a web developer with a passion for creating visually appealing
          and user-friendly websites and applications. I will be happy to bring
          my expertise in creating beautiful user interfaces to your projects
          and help your team create meaningful and impactful solutions. I am
          reliable, self-motivated, and able to work well in a team environment.
        </p>
      </div>

      <motion.div  className="relative h-[400vh]  w-full ">
      <div ref={ref} className='absolute w-10 bottom-0 top-[75vh] bg-Cviolet'> </div>
      {showUlistration&&  <motion.svg
      
          className="fixed  top-0 left-0 w-full h-screen bottom-0 "
          width="607"
          height="430"
          viewBox="0 0 607 430"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            style={{pathLength,strokeLinejoin:'revert'}}
            d="M151.831 0.256C235.613 0.397 372.413 0.397 455.831 0.256C539.249 0.115 470.7 0 303.5 0C136.3 0 68.049 0.115 151.831 0.256ZM551.796 63.422C547.559 63.743 543.578 64.522 542.95 65.152C542.013 66.092 540.441 96.258 540.046 120.859L540 123.712L500.393 122.973C467.129 122.351 460.646 122.455 459.909 123.619C459.426 124.382 459.024 137.872 459.015 153.596L459 182.187L436.338 182.846C423.875 183.209 406.565 183.506 397.874 183.506C382.533 183.506 382.033 183.572 380.785 185.756C379.818 187.448 379.506 195.148 379.523 216.831L379.546 245.656L339.862 245.331C318.036 245.152 299.8 245.386 299.339 245.85C298.877 246.315 298.589 259.477 298.699 275.1L298.897 303.506L295.699 303.518C274.481 303.599 221.348 305.758 220.533 306.572C219.88 307.224 219.424 318.172 219.293 336.305L219.086 365.006L202.057 365.583L201.459 362.795C198.408 348.569 190.236 342.514 174.068 342.5C165.659 342.493 160.967 341.164 157.926 337.927C155.669 335.525 155.62 335.257 157.225 334.083C158.649 333.042 158.78 332.226 157.975 329.42C155.982 322.468 156.77 309.113 161.113 276.275C163.317 259.61 161.697 258.276 140.405 259.22L127.309 259.801L126.655 256.529C125.674 251.626 125.877 231.827 126.977 225.111C128.074 218.415 130.526 209.708 131.92 207.562C132.667 206.411 134.348 207.531 140.179 213.066C148.442 220.908 157.939 228.412 162.7 230.86C164.461 231.765 168.154 232.506 170.907 232.506C176.244 232.506 201.372 226.465 206.336 223.988C207.97 223.173 210.701 222.504 212.404 222.502C214.107 222.5 217.028 221.567 218.895 220.429C220.99 219.151 222.53 218.746 222.916 219.37C223.259 219.926 224.791 220.856 226.318 221.437C229.848 222.779 235.304 220.698 237.06 217.341C237.732 216.057 239.599 213.881 241.209 212.506C243.719 210.362 244.266 208.964 245.049 202.692C245.551 198.669 246.227 194.948 246.552 194.422C247.527 192.844 245.112 186.96 242.471 184.479C241.112 183.202 240 181.421 240 180.52C240 177.442 236.172 174.506 232.157 174.506C225.797 174.506 212.913 184.55 207.954 193.375C206.097 196.678 204.355 197.98 197.742 201.002C183.041 207.722 171.907 209.521 165.5 206.209C162.237 204.522 150.381 193.55 143.254 185.621L136.616 178.236L140.265 175.308C142.272 173.698 144.92 170.721 146.148 168.693C147.377 166.665 149.487 163.527 150.838 161.719L153.293 158.433L155.727 160.719C158.986 163.781 167.263 163.934 171.166 161.006C174.839 158.25 177 154.318 177 150.39C177 147.661 176.02 146.171 171.396 141.867C165.285 136.18 165.303 136.545 170.8 129.756C173.533 126.38 174.89 125.506 177.398 125.506C180.804 125.506 184.996 123.133 185.006 121.199C185.01 120.543 186.36 119.239 188.006 118.303C191.11 116.536 191.682 114.65 190.043 111.586C189.284 110.167 189.61 109.518 191.62 108.442C197.883 105.09 196.283 99.361 188.54 97.412C185.212 96.574 184.036 95.763 183.806 94.151C183.626 92.889 182.059 91.258 180 90.188C175.516 87.859 164.05 88.397 155.75 91.326C150.162 93.298 150 93.301 150 91.465C150 90.426 149.051 89.068 147.89 88.447C145.153 86.982 138.79 89.313 132.984 93.907C130.032 96.243 128.11 97.059 126.352 96.723C120.831 95.667 114.154 106.724 113.209 118.487C112.913 122.183 111.898 126.267 110.848 127.988C109.75 129.789 109.006 132.908 109.004 135.721C109.001 139.58 109.568 141.083 112.126 143.997L115.252 147.557L113.559 151.992C112.627 154.43 110.726 157.456 109.335 158.716C107.943 159.975 106.061 161.809 105.152 162.791C103.076 165.033 93.656 168.018 68.39 174.442C45.864 180.168 41.157 182.16 37.661 187.442C33.904 193.119 28.444 204.342 24.15 215.213C18.737 228.915 18.542 230.064 20.929 234.11C22.565 236.882 22.746 238.04 21.894 240.265C20.847 243 21.447 251.836 22.956 255.916C23.581 257.605 23.198 258.224 20.939 259.174C16.789 260.918 14.734 264.772 14.644 270.974C14.564 276.526 16.665 280.506 19.676 280.506C20.428 280.506 21.54 281.598 22.148 282.932C22.889 284.559 24.857 285.883 28.114 286.948L32.974 288.538L38.47 285.436C46.456 280.929 53 272.181 53 266.012C53 264.596 50.733 258.166 47.962 251.722L42.924 240.006L43.944 233.429C45.043 226.347 49.388 210.528 51.317 206.589C52.329 204.523 54.746 203.564 68 199.97C76.525 197.658 83.579 195.825 83.676 195.896C83.773 195.967 81.873 201.871 79.454 209.015C74.041 225 70.807 243.74 71.213 256.769C71.482 265.424 71.639 266.026 73.702 266.319C75.729 266.608 75.903 267.177 75.883 273.484C75.857 281.544 77.631 285.696 81.844 287.441C87.673 289.856 88.032 298.063 83.414 323.388C81.406 334.404 78.896 339.474 71.563 347.322C65.715 353.583 49.953 367.602 43.25 372.505C39.67 375.123 39.233 376.624 41.5 378.506C42.325 379.191 43 380.134 43 380.603C43 381.071 39.063 384.107 34.25 387.35C24.893 393.655 20 398.008 20 400.03C20 401.604 25.68 410.002 32.568 418.611L37.853 425.217L28.773 425.861C23.779 426.216 15.262 426.506 9.846 426.506C1.761 426.506 0 426.774 0 428.006C0 429.317 5.189 429.489 41.25 429.368C63.938 429.292 91.725 428.955 103 428.618L123.5 428.006V400.341C123.5 385.125 123.86 372.315 124.301 371.873C124.742 371.432 140.717 370.708 159.801 370.265C178.885 369.822 200.785 369.132 208.466 368.733L222.431 368.006L222.466 338.841C222.485 322.801 222.762 309.414 223.082 309.092C223.403 308.771 241.178 308.014 262.582 307.411C283.987 306.808 301.801 306.02 302.168 305.66C302.535 305.3 302.445 298.706 301.967 291.006C300.634 269.519 300.759 249.773 302.235 248.861C302.914 248.441 321.405 248.219 343.326 248.368L383.181 248.639L382.541 224.322C382.189 210.948 382.26 197.081 382.7 193.506L383.5 187.006L416.5 186.395C434.65 186.058 452.313 185.721 455.75 185.645L462 185.506V125.506L479.75 125.589C489.512 125.634 507.4 126.007 519.5 126.417C531.6 126.827 541.855 126.862 542.289 126.495C542.723 126.128 543.453 112.898 543.912 97.094C544.417 79.683 545.155 67.951 545.785 67.321C546.452 66.654 557.606 66.232 576.911 66.144C604.845 66.016 606.997 65.881 606.998 64.256C607 62.634 605.266 62.518 583.25 62.672C570.188 62.763 556.033 63.1 551.796 63.422ZM146.293 91.133C146.638 91.478 146.245 93.066 145.419 94.662C144.594 96.259 144.169 97.97 144.475 98.465C144.781 98.961 147.939 98.048 151.492 96.437C159.723 92.705 170.212 90.832 175.9 92.08C181.098 93.22 181.507 94.563 177.23 96.445C172.715 98.432 173.729 100.074 179.229 99.685C184.915 99.283 192 101.115 192 102.988C192 104.708 188.183 107.506 185.837 107.506C182.775 107.506 182.674 109.669 185.623 112.093C188.046 114.085 188.263 114.618 187 115.467C186.175 116.022 184.289 116.482 182.809 116.491C179.48 116.51 178.11 118.429 180.48 119.755C181.912 120.556 181.985 120.901 180.87 121.608C177.987 123.434 176 122.622 176 119.617C176 113.909 170.223 110.495 160.601 110.518C154.882 110.531 147.093 112.37 142.34 114.829C138.667 116.73 133.189 123 132.358 126.256C131.597 129.234 130.893 129.052 128.5 125.259C126.252 121.697 122.891 120.47 118.614 121.649L115.729 122.444L116.31 117.537C117 111.711 120.418 103.343 123.099 100.917C125.532 98.714 126.335 99.495 125.066 102.832C123.835 106.069 125.835 107.839 127.438 104.931C129.298 101.56 138.05 93.39 141.333 91.962C145.011 90.362 145.449 90.289 146.293 91.133ZM169 115.258C174.035 117.773 173.864 120.062 168.045 128.044C165.27 131.849 163 135.801 163 136.825C163 137.849 164.426 139.883 166.168 141.346C174.823 148.611 175.754 151.268 171.44 156.395C164.979 164.073 153 158.969 153 148.538C153 147.323 152.342 146.506 151.364 146.506C149.992 146.506 149.831 147.258 150.368 151.177C150.951 155.43 150.681 156.323 147.338 161.177C144.021 165.993 143.312 166.506 139.97 166.506C135.724 166.506 131.324 162.873 130.396 158.599C129.416 154.088 129.04 153.363 128.007 154.002C127.453 154.344 127 155.745 127 157.115C127 162.602 132.925 169.506 137.635 169.506C138.936 169.506 140 169.885 140 170.348C140 172.005 127.608 182.506 125.652 182.506C122.543 182.506 115.467 174.37 113.119 168.095L111.024 162.496L113.9 157.751C115.482 155.141 117.082 151.994 117.456 150.756C117.918 149.225 118.913 148.506 120.567 148.506C124.318 148.506 123.517 145.826 119.543 145.08C112.954 143.844 110.014 136.246 113.51 129.486C115.331 125.965 117.815 124.506 121.99 124.506C124.735 124.506 125.356 125.057 127.13 129.066C129.711 134.903 132.51 134.881 134.782 129.006C135.633 126.806 137.193 123.758 138.249 122.233C143.172 115.122 160.747 111.135 169 115.258ZM153.75 117.586C150.826 119.289 151.54 121.653 154.75 120.896C158.557 119.999 159.839 118.648 157.992 117.48C156.15 116.315 155.922 116.321 153.75 117.586ZM163.463 118.566C162.67 119.849 165.902 123.685 167.134 122.923C168.649 121.987 168.068 119.613 166.061 118.538C164.709 117.815 163.922 117.824 163.463 118.566ZM120.557 130.878C121.043 132.813 120.69 133.367 118.643 133.881C117.263 134.227 115.837 135.444 115.475 136.584C114.666 139.133 115.62 140.286 117.217 138.689C118.868 137.038 120.05 137.212 119.362 139.006C118.993 139.968 119.381 140.506 120.444 140.506C122.881 140.506 125.24 134.267 124.018 131.054C122.742 127.698 119.721 127.545 120.557 130.878ZM148.2 131.706C146.611 133.295 146.669 135.506 148.3 135.506C149.015 135.506 150.14 134.966 150.8 134.306C151.46 133.646 152 132.521 152 131.806C152 130.175 149.789 130.117 148.2 131.706ZM159.2 132.706C157.545 134.361 157.694 136.506 159.465 136.506C161.095 136.506 163.287 133.126 162.298 132.137C161.37 131.209 160.546 131.36 159.2 132.706ZM110.384 169.756C111.644 173.326 113.961 176.737 117.626 180.415C120.589 183.391 122.899 185.917 122.757 186.03C121.935 186.685 110.704 190.506 109.601 190.506C107.128 190.506 104.733 170.97 106.607 166.088C107.617 163.456 108.443 164.259 110.384 169.756ZM103.016 174.756C103.033 181.513 105.143 192.049 106.814 193.72C107.527 194.433 108.805 194.421 110.924 193.682C113.616 192.744 114 192.835 114 194.408C114 195.396 112.621 198.185 110.935 200.606C100.337 215.818 95.318 226.023 94.33 234.367C93.743 239.326 94.651 240.945 98.413 241.648C99.868 241.92 100.62 243.448 101.553 248.025C102.228 251.336 103.478 255.713 104.33 257.753C105.182 259.793 105.569 261.651 105.19 261.882C104.81 262.113 97.638 262.63 89.25 263.032L74 263.762V256.512C74 235.438 83.681 197.781 89.81 195.019C92.676 193.727 92.624 191.506 89.728 191.506C87.309 191.506 51.901 200.831 50.105 201.941C48.576 202.886 43.242 220.475 41.332 230.872L39.704 239.737L35.193 239.119C30.63 238.494 24.824 234.915 23.078 231.651C21.866 229.388 25.949 217.477 32.982 202.754C38.961 190.238 42.045 185.9 46.349 183.955C48.082 183.172 59.85 179.855 72.5 176.584C85.15 173.314 96.625 170.186 98 169.635C102.657 167.768 102.999 168.117 103.016 174.756ZM235.8 178.706C237.54 180.446 237.299 189.634 235.443 192.283C233.391 195.213 231.651 195.091 229.943 191.899C228.668 189.517 228.74 189.135 230.774 187.488C233.178 185.541 233.717 183.506 231.829 183.506C231.185 183.506 229.846 184.24 228.854 185.138C227.32 186.527 226.6 186.583 224.026 185.517C222.361 184.827 221 183.969 221 183.608C221 183.248 222.89 181.727 225.2 180.229C229.666 177.334 233.83 176.736 235.8 178.706ZM158.258 204.639C161.467 207.311 165.895 209.944 168.258 210.586C173.826 212.1 182.318 210.572 193.988 205.957C198.788 204.059 202.929 202.506 203.19 202.506C203.451 202.506 203.478 204.869 203.25 207.756C203.021 210.643 203.273 214.914 203.809 217.246L204.783 221.486L198.141 223.458C186.566 226.894 174.639 229.492 170.405 229.499C164.188 229.51 156.464 224.111 138.194 206.984C133.413 202.502 133.25 201.685 134.542 188.768L135.267 181.531L143.883 190.687C148.623 195.724 155.091 202.002 158.258 204.639ZM132 188.006C132 192.172 130.785 192.525 129.109 188.847C128.141 186.722 128.159 186.021 129.199 185.362C131.472 183.92 132 184.418 132 188.006ZM224.485 189.756C227.604 192.458 230.081 199.106 229.034 201.962C228.064 204.606 223.425 205.2 220.984 202.992C219.973 202.077 218.848 199.568 218.485 197.417C218.051 194.848 217.296 193.506 216.284 193.506C215.033 193.506 214.871 194.302 215.423 197.756C216.33 203.437 218.461 206.448 222.089 207.174C223.984 207.553 225.609 208.784 226.506 210.519C228.008 213.421 229.838 214.506 233.237 214.506C235.247 214.506 235.255 214.567 233.5 216.506C231.489 218.728 227.05 219.156 225.2 217.306C224.54 216.646 224 214.396 224 212.306C224 209.595 223.57 208.506 222.5 208.506C221.5 208.506 221 209.506 221 211.506C221 218.625 210.402 222.464 207.223 216.497C202.953 208.483 211.56 187.506 219.119 187.506C220.642 187.506 223.057 188.518 224.485 189.756ZM242.605 190.026C244.143 192.374 244.139 192.854 242.541 197.038C240.716 201.815 238.656 203.506 234.659 203.506C232.596 203.506 232.28 203.134 232.749 201.256C233.058 200.018 234.815 197.317 236.655 195.253C238.495 193.189 240 190.602 240 189.503C240 186.862 240.612 186.984 242.605 190.026ZM126 190.49C126 191.582 124.72 193.907 123.156 195.657C119.544 199.7 116.718 199.08 117.186 194.346C117.444 191.742 118.129 190.946 121 189.915C125.775 188.2 126 188.226 126 190.49ZM130.822 198.506C131.309 198.506 129.869 203.793 127.62 210.256L123.533 222.006L123.5 260.301L119 260.812C116.525 261.094 114.413 261.24 114.306 261.138C114.199 261.035 115.588 258.018 117.393 254.432L120.674 247.913L121.9 202.514L125.159 198.458C128.164 194.718 128.477 194.562 129.177 196.454C129.594 197.583 130.334 198.506 130.822 198.506ZM118.331 223.756L117.851 246.006L114.371 253.256C112.457 257.244 110.44 260.506 109.889 260.506C108.128 260.506 104.949 251.767 104.35 245.282C103.348 234.419 107.995 215.408 114.241 204.822C115.317 202.998 116.786 201.506 117.505 201.506C118.556 201.506 118.718 205.858 118.331 223.756ZM241.073 207.814C239.325 212.413 230.067 212.674 229.177 208.149C228.913 206.809 229.743 206.503 233.677 206.491C236.33 206.482 239.162 206.057 239.971 205.545C241.981 204.274 242.227 204.779 241.073 207.814ZM104.593 219.553C103.859 222.002 102.679 227.268 101.969 231.256C100.919 237.162 100.339 238.506 98.84 238.506C95.543 238.506 96.572 233.185 102.397 220.102C105.419 213.316 106.545 213.034 104.593 219.553ZM30.346 241.006C32.32 241.831 35.245 242.506 36.845 242.506C38.446 242.506 40.211 243.069 40.767 243.756C42.309 245.66 50 264.185 50 265.995C50 268.066 46.553 274.803 44.71 276.332C43.513 277.325 43.354 277.105 43.754 275.015C44.56 270.796 42.316 272.21 38.997 278.012C37.264 281.04 34.981 283.981 33.923 284.547C31.25 285.978 31.485 285.206 35.5 279.37C39.301 273.844 39.721 272.506 37.657 272.506C36.918 272.506 34.781 274.751 32.909 277.494C28.975 283.26 27.077 284.332 25.245 281.826C24.092 280.25 24.416 279.64 27.969 276.689C34.115 271.583 32.914 269.182 26.616 273.985C24.828 275.349 22.27 276.587 20.933 276.735C18.638 276.991 18.483 276.683 18.202 271.304C17.954 266.575 18.267 265.239 20.035 263.471C23.034 260.472 23.805 261.925 21.133 265.54C19.077 268.321 18.986 270.506 20.926 270.506C21.371 270.506 22.969 268.64 24.479 266.358C27.388 261.962 27.37 262.505 25.039 249.562C24.067 244.164 24.506 239.506 25.986 239.506C26.409 239.506 28.371 240.181 30.346 241.006ZM157.954 264.123C159.478 265.551 159.547 264.61 155.921 291.989C153.728 308.551 153.099 319.468 154.014 325.089C154.532 328.276 154.852 330.988 154.724 331.115C154.275 331.565 130.716 333.556 130.337 333.176C130.126 332.965 131.943 324.741 134.375 314.899C139.17 295.491 140.575 286.932 139.601 283.053C138.409 278.304 136.561 278.184 114.23 281.392C82.338 285.975 84.283 285.88 81.398 282.994C79.161 280.758 78.939 279.822 79.204 273.756L79.5 267.006L89 266.304C94.225 265.918 107.5 264.892 118.5 264.023C150.342 261.508 155.176 261.521 157.954 264.123ZM136.155 292.22C135.493 296.502 132.98 307.879 130.569 317.502C128.158 327.124 126.395 335.337 126.652 335.752C126.908 336.167 127.766 336.506 128.559 336.506C130.436 336.506 130.426 336.619 127.501 348.692C126.127 354.365 125.002 361.091 125.001 363.639C125 367.309 124.615 368.374 123.146 368.757C120.448 369.463 119.843 376.119 120.081 402.46L120.284 425.006L90.152 425.557L88.991 419.782C86.686 408.316 81.547 403.891 69.772 403.235C62.517 402.831 60 401.477 60 397.977C60 396.299 60.464 395.812 61.75 396.139C63.02 396.463 64.252 395.236 66.238 391.669C69.721 385.416 84.537 365.896 95.398 353.25C100.007 347.884 104.548 341.87 105.49 339.885C108.76 332.995 113.19 313.893 117.476 288.203C118.209 283.807 118.247 283.786 127.5 282.694C137.198 281.55 137.715 282.119 136.155 292.22ZM112 301.941C112 303.289 108.6 318.468 106.279 327.479C103.354 338.838 100.955 342.754 87.575 358.006C76.847 370.236 63 389.045 63 391.387C63 392.003 62.573 392.506 62.052 392.506C60.892 392.506 50.617 383.947 46.5 379.552L43.5 376.349L47.468 373.177C59.648 363.443 73.516 350.73 76.901 346.195C83.044 337.966 84.895 333.323 87.036 320.766C88.67 311.18 89.453 308.689 91.27 307.291C94.033 305.166 112 300.529 112 301.941ZM155.207 339.449C158.76 343.226 163.798 345.488 168.683 345.5C171.454 345.508 172.399 348.358 171.537 354.105L170.877 358.506H163.597C159.593 358.506 150.17 358.801 142.658 359.161L129 359.816V356.979C129 352.405 133.108 338.117 134.815 336.756C135.758 336.004 139.394 335.507 143.941 335.508C151.446 335.509 151.527 335.538 155.207 339.449ZM188.723 348.521C192.403 350.132 196.984 355.246 196.996 357.756C196.998 358.169 191.777 358.506 185.393 358.506C175.22 358.506 173.861 358.311 174.393 356.924C174.727 356.054 175 353.078 175 350.311V345.279L179.75 345.975C182.363 346.358 186.4 347.503 188.723 348.521ZM198.267 363.418C198.728 365.181 197.978 365.375 188.633 365.91C183.06 366.23 167.25 366.607 153.5 366.748L128.5 367.006L128.184 364.785C127.873 362.594 128.059 362.559 141.684 362.254C149.283 362.084 165.01 361.846 176.633 361.725C196.699 361.517 197.792 361.603 198.267 363.418ZM51.81 388.814C54.693 391.733 56.785 394.387 56.46 394.713C56.135 395.038 56.371 397.17 56.985 399.45C57.736 402.238 58.903 403.96 60.551 404.711C63.443 406.029 63.455 406.135 61.429 413.102L59.858 418.506H54.379C46.854 418.506 44.022 416.733 37.2 407.752C30.169 398.495 28.524 395.582 29.675 394.431C31.5 392.606 44.553 383.692 45.534 383.602C46.103 383.549 48.927 385.894 51.81 388.814ZM31.789 405.756C41.318 418.81 43.411 420.448 52.112 421.667C56.176 422.236 65.463 422.532 72.75 422.325C84.925 421.979 86 422.093 86 423.727C86 425.375 84.468 425.506 65.135 425.506C39.701 425.506 42.013 426.604 28.737 408.221C24.222 401.97 23.22 399.946 24.11 398.874C24.734 398.122 25.362 397.506 25.506 397.506C25.649 397.506 28.477 401.218 31.789 405.756ZM78 407.53C80.609 408.908 83.828 412.911 84.498 415.61C85.111 418.081 84.903 418.247 80.432 418.86C73.682 419.785 64.211 419.657 63.577 418.631C62.958 417.63 65.765 408.665 67.313 406.697C68.369 405.354 74.834 405.858 78 407.53Z"
            stroke="white"
          />
        </motion.svg>}
      </motion.div>
    </motion.section>
  );
};

export default Aboutme;
