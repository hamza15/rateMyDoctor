class ReviewSerializer < ActiveModel::Serializer
    attributes :rating, :feedback, :doctor_name, :doctor_speciality, :doctor_location
    #belongs_to :doctor
end