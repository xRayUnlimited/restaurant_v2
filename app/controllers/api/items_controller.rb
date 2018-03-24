class Api::ItemsController < ApplicationController
  access all: [:show, :index, :in_cart, :submit_cart], user: :all, admin: :all
  before_action :set_item, only: [:show, :update, :destroy, :in_cart]

  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def create
    item = Item.new(item_params)

    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: item.errors.full_messages.join(',') }, status: 422
    end
  end

  def in_cart
    @item.update(in_cart: !@item.in_cart)
    render json: @item
  end

  def submit_cart
    items = params[:items]
    order = Order.create
    items.each do |item|
      order.order_items.create(name: item["name"])
    end
    Item.update_all(in_cart: false)
    render json: "Order was submitted"
  end

  def destroy
    @item.destroy
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :price, :description, :img)
    end
end
