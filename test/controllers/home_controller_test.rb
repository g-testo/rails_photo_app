require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get home_index_url
    assert_response :success
  end

  test "should get maps" do
    get home_maps_url
    assert_response :success
  end

  test "should get nomaps" do
    get home_nomaps_url
    assert_response :success
  end

end
