class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :rating, :feedback, :doctor_name, :doctor_speciality, :doctor_location, :doctor_image_url
    #belongs_to :doctor
end