class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.float :price
      t.string :description
      t.string :img

      t.timestamps
    end
  end
end
