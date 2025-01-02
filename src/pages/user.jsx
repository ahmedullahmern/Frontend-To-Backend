import { useEffect, useState } from "react";
import Navbar from "../components/Header";
import axios from "axios";
import Cookies from 'js-cookie';
import { AppRoutes } from "../constant/constant";
import Card from "../components/Card";
import { data } from "react-router-dom";

export default function User() {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        thumbnail: "",
    });

    useEffect(() => {
        getCourse();
    }, []);

    const getCourse = () => {
        axios.get(AppRoutes.getCourse, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        }).then((res) => {
            console.log("resInGetCourse==>", res.data.data[1].title);
            setCourses(res.data.data); // Assuming your API response contains courses in `res.data.data`
        }).catch((err) => {
            console.log("errorInGetCourse==>", err);
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddCourse = () => {
        axios.post(AppRoutes.addCourse, formData, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        }).then((res) => {
            console.log("Course added==>", res);
            setShowModal(false); // Close modal after successful submission
            setFormData({ title: "", description: "", thumbnail: "" }); // Reset form
            getCourse(); // Refresh course list
        }).catch((err) => {
            console.log("errorInAddCourse==>", err);
        });
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-4">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    onClick={() => setShowModal(true)}
                >
                    Add Course
                </button>
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-xl font-bold mb-4">Add Course</h2>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full p-2 border mb-4 rounded-lg"
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full p-2 border mb-4 rounded-lg"
                            />
                            <input
                                type="text"
                                name="thumbnail"
                                placeholder="Thumbnail URL"
                                value={formData.thumbnail}
                                onChange={handleInputChange}
                                className="w-full p-2 border mb-4 rounded-lg"
                            />
                            <div className="flex justify-end">
                                <button
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                                    onClick={handleAddCourse}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {courses.map((data) => (
                                < Card data={data} />
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
