import { Formik, Form, Field } from "formik";
import Input from "../components/Input";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { imageUrl } from "../api/api";
import { NavLink, useNavigate } from "react-router-dom";
import TextArea from "../components/Textarea";
import { editProfile, fetchEditedPhoto, fetchProfile } from "../store/slices/profileSlice";
import { EditProfileDataType } from "../types/types";
import * as Yup from 'yup'
import { useState } from "react";

function ProfileEdit() {
  const { myProfile } = useAppSelector((state) => state.profileData);
  const { loggedUser } = useAppSelector((state) => state.authData);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [imageFile, setImageFile] = useState({})

  const formData = new FormData()
  console.log(formData)


  
  function editProfileInfo(data: EditProfileDataType){
    dispatch(editProfile(data))
    dispatch(fetchEditedPhoto(formData))
    dispatch(fetchProfile(`${loggedUser.id}`))
    navigate(`/profile/${loggedUser.id}`)
  }

  const validate = Yup.object().shape({
    fullName: Yup.string().required('This field is required'),
    aboutMe: Yup.string().required('This field is required'),
    lookingForAJobDescription: Yup.string().required('This field is required')
  })


console.log(imageFile);

  function changeProfilePhoto(e: any){
    formData.append('image', e.target.files[0])
  }

  return (

    <div className="container py-10">
      <Formik
        initialValues={{
          fullName: "",
          aboutMe: "",
          lookingForAJobDescription: "",
        }}
        onSubmit={(values) => editProfileInfo(values)}
        validationSchema={validate}
      >
        <Form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Input name="fullName" id="full-name" type="text" labelName="Full name" />
                <TextArea id="about" name='aboutMe' title="About Me" />
                <TextArea
                id="for-job"
                  name='lookingForAJobDescription'
                  title="Job Description"
                  placeholder="Looking for a job..."
                />

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={
                       (typeof myProfile.photos !== 'undefined') && myProfile?.photos.small
                          ? myProfile.photos.small
                          : imageUrl
                      }
                      alt=""
                    />
                    {/* <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button> */}

                    {/* <input type="file"  id="" /> */}
                    <Field onChange={changeProfilePhoto} type='file' name='file'/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <NavLink to={`/profile/${loggedUser.id}`}>
              <button className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
            </NavLink>
           
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ProfileEdit;
