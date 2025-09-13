import { useEffect, useRef, useState } from "react";
import styles from "./MultiStepModal.module.css";
import { Button, Form } from "react-bootstrap";
import { HiMiniPlus } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const techOptions = [
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
];
const categories = [
  "Website Design & Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "E-Commerce Solutions",
];
const MultiStepModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedTech, setSelectedTech] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const dropdownRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    onClose();
  };

  const handleAddClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleSelect = (tech) => {
    if (!selectedTech.includes(tech)) {
      setSelectedTech([...selectedTech, tech]);
    }
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  if (!isOpen) return null;
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      // Remove if already selected
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      // Add if not selected
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <Button className={styles.closeButton} onClick={onClose}>
          <RxCross2 />
        </Button>

        {step === 1 && (
          <div className={styles.step}>
            <div className={styles.stepImg}>
              <img src="/images/step1.png" alt="drivingForce" />
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepContentTop}>
                <p>
                  Get a tailored estimate for your project in just a few steps.
                </p>
                <h2>Request a Free Quotation</h2>
              </div>
              <div className={styles.stepProgress}>
                <span
                  className={`${styles.stepIndicator} ${
                    step >= 1 ? styles.stepIndicatorActive : ""
                  }`}
                ></span>
                <span
                  className={`${styles.stepIndicator} ${
                    step >= 2 ? styles.stepIndicatorActive : ""
                  }`}
                ></span>
              </div>

              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                <div className={styles.selectCat}>
                  <h5>Select Your Project Category</h5>
                  <ul className={styles.categoryList}>
                    {categories.map((category, index) => {
                      const isActive = selectedCategories.includes(category);
                      return (
                        <li
                          onClick={() => toggleCategory(category)}
                          key={index}
                          className={`${styles.categoryItem} ${
                            isActive ? styles.active : ""
                          }`}
                        >
                          {category}
                          {isActive && (
                            <button
                              className={styles.removeButton}
                              onClick={() => toggleCategory(category)}
                            >
                              <RxCross2 />
                            </button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className={styles.selectCat}>
                  <h5>Describe Your Project</h5>
                  <textarea
                    className={styles.eachInput}
                    placeholder="Describe Your Project"
                    rows={4}
                  />
                </div>

                <div className={styles.selectCat}>
                  <h5>Reference (Technology / Tools / Examples)</h5>
                  <div className={styles.selectCatWrap}>
                    <ul className={styles.selectedList}>
                      {selectedTech.map((tech, index) => (
                        <li key={index} className={styles.techItem}>
                          {tech}
                          <button
                            className={styles.removeButton}
                            onClick={() => {
                              setSelectedTech(
                                selectedTech.filter((_, i) => i !== index)
                              );
                            }}
                          >
                            <RxCross2 />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={styles.addButton}
                      onClick={handleAddClick}
                    >
                      <HiMiniPlus />
                      Add
                    </Button>
                  </div>

                  {showDropdown && (
                    <div className={styles.dropdown}>
                      {techOptions.map((tech, index) => (
                        <div
                          key={index}
                          className={styles.dropdownItem}
                          onClick={() => handleSelect(tech)}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.selectCat}>
                  <h5>Estimated Budget</h5>
                  <input
                    type="text"
                    className={styles.eachInput}
                    placeholder="Enter your budget"
                  />
                </div>
                <div className={styles.selectCat}>
                  <h5>Project Timeline</h5>
                  <input
                    type="text"
                    className={styles.eachInput}
                    placeholder="How soon do you want the project to be delivered?"
                  />
                </div>

                <div className={styles.buttonGroup}>
                  <Button type="submit" className={styles.modalButton}>
                    Next
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.step}>
            <div className={styles.stepImg}>
              <img src="/images/step2.png" alt="drivingForce" />
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepContentTop}>
                <p>
                  We’ll use this info only to contact you regarding your
                  project.
                </p>
                <h2>Your Information</h2>
              </div>
              <div className={styles.stepProgress}>
                <span
                  className={`${styles.stepIndicator} ${
                    step >= 1 ? styles.stepIndicatorActive : ""
                  }`}
                ></span>
                <span
                  className={`${styles.stepIndicator} ${
                    step >= 2 ? styles.stepIndicatorActive : ""
                  }`}
                ></span>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name here"
                    className={styles.eachInput}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className={styles.eachInput}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    className={styles.eachInput}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    placeholder="Leave us message..."
                    className={styles.eachInput}
                  />
                </Form.Group>

                <div className={styles.buttonGroup}>
                  {/* <Button
                    type="button"
                    className={styles.modalButton}
                    onClick={prevStep}
                  >
                    Back
                  </Button> */}
                  <Button type="submit" className={styles.modalButton}>
                    Submit & Get My Quotation
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepModal;
