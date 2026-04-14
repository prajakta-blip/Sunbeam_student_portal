import { useState, useEffect } from "react";

function ImageScroller({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div style={styles.container}>
      <button style={{ ...styles.button, ...styles.left }} onClick={prev}>
        ‹
      </button>

      <div style={styles.imageContainer}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Scroller"
            style={{
              ...styles.image,
              opacity: index === i ? 1 : 0,
              visibility: index === i ? "visible" : "hidden",
            }}
          />
        ))}
      </div>

      <button style={{ ...styles.button, ...styles.right }} onClick={next}>
        ›
      </button>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    margin: "30px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "320px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.8s ease-in-out, visibility 0.8s ease-in-out",
  },
  button: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "#fff",
    border: "none",
    fontSize: "28px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    zIndex: 10,
  },
  left: {
    left: "-20px",
  },
  right: {
    right: "-20px",
  },
};

export default ImageScroller;
