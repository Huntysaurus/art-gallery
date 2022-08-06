class PieceSerializer < ActiveModel::Serializer
  attributes :id, :title, :medium, :description, :worth, :user_id
end
