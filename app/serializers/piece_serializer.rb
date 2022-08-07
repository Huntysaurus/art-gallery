class PieceSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :medium, :description, :worth, :user_id
  has_one :user
end
