class CreateOrderItems < ActiveRecord::Migration[5.1]
  def change
    create_table :order_items do |t|
      t.string :name
      t.belongs_to :order

      t.timestamps
    end
  end
end
