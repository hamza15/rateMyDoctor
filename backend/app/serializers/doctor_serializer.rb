class DoctorSerializer < ActiveModel::Serializer
    attributes :id, :name, :speciality, :location, :image_url, :doctor_reviews

end